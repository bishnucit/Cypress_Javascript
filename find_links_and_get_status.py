import requests
import re
import urllib3
from bs4 import BeautifulSoup

#url = "https://www.ultimateqa.com/automation"
#testing website where one can practice automation
url = "http://awful-valentine.com/purchase-forms/slow-ajax"


response = requests.get(url)
soup = BeautifulSoup(response.content, "html.parser")
http = urllib3.PoolManager()

#uses regex to find all the links in a page
for link in soup.findAll('a', attrs={'href': re.compile("^http://")}):
    r=http.request('GET', link.get('href'))
    print (link.get('href'))
    print ("------------------")
    print (r.status) 
