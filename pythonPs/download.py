"# -*- coding: utf-8 -*-"
import os
import re
import urllib.request
import urllib3
import logging
from bs4 import BeautifulSoup

def getHtml(url):
    http=urllib3.PoolManager()
    html=http.request('GET', url)
    return html.data

def getSearch(name):
    encodeName = urllib.request.quote(name)
    src='http://www.soku.com/search_video/q_' + encodeName
    return src

with open('namelist.txt', 'r', encoding='utf-8') as f:
    for line in f.readlines():
        url=getSearch(line.strip())
        print(url)
        page=getHtml(url)
        soup = BeautifulSoup(page)
        urlList = soup.find_all('div',class_='v-link')

        count = 0
        for url in urlList:
            if count >= 1:
                break
            print(url.a.get('href'))
            cmd = "you-get %s" %url.a.get('href')
            print(cmd)
            os.system(cmd)
            count += 1