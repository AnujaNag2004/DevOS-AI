const axios = require("axios");

async function getRepository(owner, repo) {

  const headers = {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  };

  const repoInfo = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}`,
    { headers }
  );

  const languages = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}/languages`,
    { headers }
  );

  const readme = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}/readme`,
    {
      headers: {
        ...headers,
        Accept: "application/vnd.github.raw",
      },
    }
  );

  return {
    repo: repoInfo.data,
    languages: languages.data,
    readme: readme.data,
  };
}

module.exports = {
  getRepository,
};