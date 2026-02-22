from aiohttp import web

from ..utils.indexer import get_index


async def get_tags(request):
    tags = get_index().query_tags()
    return web.json_response(tags)
