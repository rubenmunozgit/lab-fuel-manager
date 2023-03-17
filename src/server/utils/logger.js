const formatDate = () => new Date(Date.now()).toUTCString();

const log = (level, msg) => {
    console.log(`${formatDate()} | ${level} | ${msg}`);
}

const logger = {
    info: (msg) => log('info', msg),
    warn: (msg) => log('warn', msg),
    error: (msg) => log('error', msg),
};

export default logger