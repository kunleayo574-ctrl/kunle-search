const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const results = document.getElementById("results");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    search(input.value);
});

function search(query) {

    query = query.trim();

    if (!query) {
        return;
    }

    const youtubeURL =
        "https://www.youtube.com/results?search_query=" +
        encodeURIComponent(query);

    results.innerHTML = `
        <div class="result-card">
            <h3>Search results for "${escapeHTML(query)}"</h3>

            <p>
                Find videos, music, tutorials and more on YouTube.
            </p>

            <a
                class="youtube-button"
                href="${youtubeURL}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Open YouTube Results →
            </a>
        </div>
    `;

    results.scrollIntoView({
        behavior: "smooth"
    });
}

function quickSearch(query) {
    input.value = query;
    search(query);
}

function escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}