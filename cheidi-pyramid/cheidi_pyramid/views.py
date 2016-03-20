from pyramid.view import view_config
from instagram.client import InstagramAPI
from pyramid.renderers import get_renderer


@view_config(route_name='home',
             renderer='templates/home.pt')
def my_view(request):
    main = get_renderer('templates/template.pt')\
        .implementation()
    return {'main': main,
            'project': 'cheidi-pyramid'}


def _instagram(tag):
    access_token = ""
    api = InstagramAPI(access_token=access_token)
    tag_search, next_tag = api.tag_search(q=tag)
    if tag_search:
        tag_recent_media, next = api.tag_recent_media(
            tag_name=tag_search[0].name)
        return tag_recent_media
    return []


@view_config(route_name='instagram',
             renderer='templates/instagram.pt')
def index(request):
    media = {'tag': "",
             'pics': [],
             'count': "",
             'ajax': False}

    tag = request.GET.get('tag')
    ajax = request.GET.get('ajax')
    count = request.GET.get('count')
    url = 'http://charlieandheidi.com/instagram?tag='
    media['ajax'] = ajax
    if tag:
        media['tag'] = tag
        media['pics'] = _instagram(tag)
        if count:
            media['pics'] = media['pics'][:int(count)]
    main = get_renderer('templates/template.pt')\
        .implementation()
    return {'main': main,
            'media': media,
            'url': url}
