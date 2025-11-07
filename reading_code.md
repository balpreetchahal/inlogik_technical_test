# Summary
Fetch and print a list of repositories from GitHub for the dotnet organization.

## Details
- ProcessRepositoriesAsync is an async method that uses HttpClient to call GitHub’s API.
- It fetches /orgs/dotnet/repos and deserializes the JSON into List<Repository>.
- ?? new List<Repository>() ensures the method never returns null, avoiding NullReferenceException in the foreach loop.
- The foreach loop prints repository properties (Name, Homepage, GitHub URL, Description, Watchers, LastPush).
- Watchers are formatted with commas for readability.
- Task<List<Repository>> represents a future value to await asynchronously.
- HTTP headers include Accept (GitHub API v3 JSON) and User-Agent (required by GitHub).
- await pauses execution until the HTTP call completes.
- lastPush is converting the utc time to locale so printed time be according to the region this test is run.


## Issues observed
- No exception handling: if GitHub returns 400/500, the program will throw HttpRequestException.
- Some required using statements are missing (System.Net.Http, System.Threading.Tasks).
