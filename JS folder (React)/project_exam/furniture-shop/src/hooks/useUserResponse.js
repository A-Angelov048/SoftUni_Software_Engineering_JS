import { useContext, useEffect, useState } from "react";
import {
  createDeliveryInfo,
  editProfile,
  getDeliveryInfo,
  getProfile,
  login,
  logout,
  register,
} from "../api-service/userService";
import { AuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { trimValue } from "../utils/trimValue";
import {
  deliveryFormSchema,
  loginSchema,
  passwordSchema,
  profileSchema,
  registerSchema,
} from "../utils/schemaForm";
import { ErrorContext } from "../context/ErrorContext";
import { useErrorHandler } from "./useErrorHandler";

const schemas = {
  profileSchema: profileSchema,
  passwordSchema: passwordSchema,
};

export function useLoginUser() {
  const navigate = useNavigate();
  const errorHandler = useErrorHandler();
  const { changeAuthState } = useContext(AuthContext);

  const getUser = async (values) => {
    const trimValues = trimValue(values);

    try {
      await loginSchema.validate(trimValues, { abortEarly: false });
      const result = await login(trimValues);
      changeAuthState(result);
      navigate("/");
    } catch (error) {
      errorHandler(error);
    }
  };

  return getUser;
}

export function useRegisterUser() {
  const navigate = useNavigate();
  const { changeAuthState } = useContext(AuthContext);
  const errorHandler = useErrorHandler();

  const createUser = async (values) => {
    const trimValues = trimValue(values);

    try {
      await registerSchema.validate(trimValues, { abortEarly: false });
      const result = await register(trimValues);
      changeAuthState(result);
      navigate("/");
    } catch (error) {
      errorHandler(error);
    }
  };

  return createUser;
}

export function useLogoutUser() {
  const { changeAuthState } = useContext(AuthContext);
  const errorHandler = useErrorHandler();

  const logoutUser = async () => {
    try {
      await logout();
      changeAuthState({});
    } catch (error) {
      errorHandler(error);
    }
  };

  return logoutUser;
}

export function useGetProfile(profileId) {
  const userContext = useContext(AuthContext);
  const errorHandler = useErrorHandler();
  const [user, setUser] = useState({});
  const [stateFurniture, setStateFurniture] = useState({
    furniture: [],
    currentClick: "",
  });

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      try {
        const response = await getProfile(profileId, abortController);
        setUser(response);
      } catch (error) {
        errorHandler(error);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [userContext]);

  const handleClick = (furniture, currentClick) => {
    setStateFurniture({ furniture, currentClick });
  };

  return [user, stateFurniture, handleClick];
}

export function useGetDeliveryInfo() {
  const location = useLocation();
  const errorHandler = useErrorHandler();
  const [info, setInfo] = useState({});

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      try {
        const response = await getDeliveryInfo();
        setInfo(response.data);
      } catch (error) {
        errorHandler(error);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [location]);

  return info;
}

export function usePostDeliveryInfo() {
  const { state, pathname } = useLocation();
  const navigate = useNavigate();
  const errorHandler = useErrorHandler();
  const { handleMessage } = useContext(ErrorContext);

  const submitDeliveryInfo = async (values) => {
    const trimValues = trimValue(values);

    try {
      await deliveryFormSchema.validate(trimValues, { abortEarly: false });
      await createDeliveryInfo(trimValues);

      handleMessage("Form submit successfully");

      if (pathname === "/checkout") {
        navigate("/checkout", { state: state });
      }
    } catch (error) {
      errorHandler(error);
    }
  };

  return submitDeliveryInfo;
}

export function useChangeUserInfo(action) {
  const errorHandler = useErrorHandler();
  const { changeAuthState } = useContext(AuthContext);
  const { handleMessage } = useContext(ErrorContext);

  const changeUserInfo = async (values, resetCurForm) => {
    const trimValues = trimValue(values);

    try {
      await schemas[action].validate(trimValues, { abortEarly: false });
      const result = await editProfile(trimValues);
      changeAuthState(result);

      handleMessage("Form submit successfully");

      if (action === "passwordSchema") {
        resetCurForm();
      }
    } catch (error) {
      errorHandler(error);
    }
  };

  return changeUserInfo;
}
