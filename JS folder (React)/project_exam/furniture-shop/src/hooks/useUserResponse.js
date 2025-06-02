import { useContext, useEffect, useState } from "react";
import {
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
  loginSchema,
  passwordSchema,
  profileSchema,
  registerSchema,
} from "../utils/schemaForm";
import { ErrorContext } from "../context/ErrorContext";

const schemas = {
  profileSchema: profileSchema,
  passwordSchema: passwordSchema,
};

export function useLoginUser() {
  const navigate = useNavigate();
  const { changeAuthState } = useContext(AuthContext);
  const { handleError, clearError } = useContext(ErrorContext);

  const getUser = async (values) => {
    const trimValues = trimValue(values);

    try {
      await loginSchema.validate(trimValues, { abortEarly: false });
      const result = await login(trimValues);
      changeAuthState(result);
      navigate("/");
    } catch (error) {
      if (error.name === "ValidationError") {
        const newError = {};

        error.inner.forEach((err) => {
          newError[err.path] = err.message;
        });
        handleError(newError);
      } else {
        handleError({ message: error.message });

        setTimeout(() => {
          clearError();
        }, 4000);
      }
    }
  };

  return getUser;
}

export function useRegisterUser() {
  const navigate = useNavigate();
  const { changeAuthState } = useContext(AuthContext);
  const { handleError, clearError } = useContext(ErrorContext);

  const createUser = async (values) => {
    const trimValues = trimValue(values);

    try {
      await registerSchema.validate(trimValues, { abortEarly: false });
      const result = await register(trimValues);
      changeAuthState(result);
      navigate("/");
    } catch (error) {
      if (error.name === "ValidationError") {
        const newError = {};

        error.inner.forEach((err) => {
          newError[err.path] = err.message;
        });
        handleError(newError);
      } else {
        handleError({ message: error.message });

        setTimeout(() => {
          clearError();
        }, 4000);
      }
    }
  };

  return createUser;
}

export function useLogoutUser() {
  const { changeAuthState, updateAuthError } = useContext(AuthContext);

  const logoutUser = async () => {
    try {
      await logout();
      changeAuthState({});
    } catch (error) {
      if (error.message === "403") return updateAuthError(true);

      console.error(error.message);
    }
  };

  return logoutUser;
}

export function useGetProfile(profileId) {
  const userContext = useContext(AuthContext);
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
        if (error.message === "403") return userContext.updateAuthError(true);

        console.error(error.message);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [profileId, userContext]);

  const handleClick = (furniture, currentClick) => {
    setStateFurniture({ furniture, currentClick });
  };

  return [user, stateFurniture, handleClick];
}

export function useGetDeliveryInfo() {
  const location = useLocation();
  const userContext = useContext(AuthContext);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      try {
        const response = await getDeliveryInfo();
        setInfo(response);
      } catch (error) {
        if (error.message === "403") return userContext.updateAuthError(true);

        console.error(error.message);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [location]);

  return info;
}

export function useChangeUserInfo(action) {
  const { changeAuthState } = useContext(AuthContext);
  const { handleError, clearError } = useContext(ErrorContext);
  const [handleTag, setHandleTag] = useState(false);

  const changeUserInfo = async (values, resetCurForm) => {
    const trimValues = trimValue(values);

    try {
      await schemas[action].validate(trimValues, { abortEarly: false });
      const result = await editProfile(trimValues);
      changeAuthState(result);
      setHandleTag((oldState) => !oldState);

      handleError({ successMessage: "Form submit successfully" });

      if (action === "passwordSchema") {
        resetCurForm();
      }
      setTimeout(() => {
        clearError();
      }, 2000);
    } catch (error) {
      if (error.message === "403") {
        console.error(error.message);
        updateAuthError(true);
      } else if (error.name === "ValidationError") {
        const newError = {};

        error.inner.forEach((err) => {
          newError[err.path] = err.message;
        });
        handleError(newError);
      } else {
        handleError({ errorMessage: error.message });

        setTimeout(() => {
          clearError();
        }, 4000);
      }
    }
  };

  return [handleTag, changeUserInfo];
}
