##Author's Note - Below code searches all links from website given in url variable and prints out the status code and the full url after parsing.


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
    
    
  
#Sample Output
"""
http://awful-valentine.com/purchase-forms/
------------------ 
200
http://awful-valentine.com/purchase-forms/3rd-party-links/
------------------ 
200
http://awful-valentine.com/purchase-forms/perfect-world/
------------------ 
200
http://awful-valentine.com/purchase-forms/slow-ajax/
------------------ 
200
http://awful-valentine.com/purchase-forms/slow-animation/
------------------ 
200
http://awful-valentine.com/store/
------------------ 
200
http://awful-valentine.com/store/cart/
------------------ 
200
http://awful-valentine.com/store/checkout/
------------------ 
200
http://awful-valentine.com/
------------------ 
200
http://awful-valentine.com/store/cart/
------------------ 
200
http://awful-valentine.com/store/checkout/
------------------ 
200
http://awful-valentine.com/store/cart/
------------------ 
200
http://awful-valentine.com
------------------ 
200
http://awful-valentine.com/code/
------------------ 
200
http://awful-valentine.com/code/chapter-1/
------------------ 
200
http://awful-valentine.com/code/chapter-2/
------------------ 
200
http://awful-valentine.com/code/chapter-3/
------------------ 
200
http://awful-valentine.com/code/chapter-4/
------------------ 
200
http://awful-valentine.com/code/chapter-5/
------------------ 
200
http://awful-valentine.com/code/chapter-6/
------------------ 
200
http://awful-valentine.com/code/chapter-6/part-1/
------------------
200
http://awful-valentine.com/purchase-forms/slow-animation/
------------------ 
200
http://awful-valentine.com/store/
------------------ 
200
http://awful-valentine.com/store/cart/
------------------ 
200
http://awful-valentine.com/store/checkout/
------------------ 
200
http://www.kovalenko.co
------------------ 
503

"""
