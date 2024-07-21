## Anime Facts Rest API

The Anime Facts Rest API is an API written in Node.js to get anime facts. The project is mantained by [Chadan-02](https://github.com/chandan-02) and the API documentation can be found [here](https://chandan-02.github.io/anime-facts-rest-api/).

The Anime Facts Rest API wrapper is in the `anime_api.apis` module.

```python3
from anime_api.apis import AnimeFactsRestAPI

api = AnimeFactsRestApi()
```

### `get_animes()`

The `get_animes` method returns a list of `anime_api.apis.anime_facts_rest_api.objects.Anime` objects.

```python3
from anime_api.apis import AnimeFactsRestAPI

api = AnimeFactsRestAPI()

animes = api.get_animes()
```

### The `Anime` class

The `Anime` class has 3 parameters: `id`, `name`, and `image`.

You can also get all its facts with the `facts()` method.

```python3
from anime_api.apis import AnimeFactsRestAPI

api = AnimeFactsRestAPI()

animes = api.get_animes()
anime = animes[0]
facts = anime.facts(api)
```

### The `Fact` class

The `Fact` object has 2 parameters: `id` and `fact`. Take into account that, although the official API says the `id` is the fact's ID, it seems to be the number of the fact in the response.

### `get_anime_facts(anime_name: str)`

You can fetch all facts for an anime using the `get_anime_facts` method. It will return a list of `Fact` objects.

```python3
from anime_api.apis import AnimeFactsRestAPI

api = AnimeFactsRestAPI()

facts = api.get_anime_facts(anime_name="bleach")
```

### `get_fact(anime_name: str, fact_id: int)`

The `get_fact()` method needs 2 arguments: `anime_name` and `fact_id`. This method returns a `Fact`.

```python3
from anime_api.apis import AnimeFactsRestAPI

api = AnimeFactsRestAPI()

fact = api.get_fact(anime_name="fma_brotherhood", fact_id=1)
```