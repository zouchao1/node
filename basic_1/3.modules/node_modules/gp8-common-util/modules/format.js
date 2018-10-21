

const Format_Util = {
    time (timestamp) {
        let _date = new Date(timestamp);

        return _data.getFullYear() + '-' + (_date.getMonth() + 1) + '-' + _date.getDate()
    }
}

module.exports = Format_Util