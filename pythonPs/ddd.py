import pycurl

# As long as the file is opened in binary mode, both Python 2 and Python 3
# can write response body to it without decoding.
with open('out.html', 'wb') as f:
    c = pycurl.Curl()
    c.setopt(c.URL, 'http://p.bokecc.com/flash/pocle/player.swf?siteid=21F4A787A918F3CE&vid=547FD1CE8E66801F9C33DC5901307461&referer=http%3A%2F%2Fwww.tangdou.com%2Fv89%2FdAOgNYMjwD0z2w2.html&autoStart=true&share=true')
    c.setopt(c.WRITEDATA, f)
    c.perform()
    c.close()
