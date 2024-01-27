async function login() {
  try {
    return null;
  } catch (error) {
    return { message: error.message, status: 'error' };
  }
}

module.exports = {
  login,
};
