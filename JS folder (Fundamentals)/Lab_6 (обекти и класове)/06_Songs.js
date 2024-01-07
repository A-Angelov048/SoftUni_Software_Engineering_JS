function songs(data) {

    let songsNumber = data.shift();
    let typeList = data.pop();

    class Songs {

        constructor(list) {
            this.list = list;
        }
        printSong() {
            console.log(this.list);
        }

    }

    for (let i = 0; i < songsNumber; i++) {

        let currentTypeList = data[i].split('_');
        let [list, song] = currentTypeList;

        if (typeList === 'all') {
            let currentSong = new Songs(song);
            currentSong.printSong();
        } else if (list === typeList) {
            let currentSong = new Songs(song);
            currentSong.printSong();
        }
    }
}


songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);

console.log('===============');

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])

console.log('=================');

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])
