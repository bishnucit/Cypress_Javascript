#Author's Note - Search a page for broken images using requests and then verifies the image is broken or not.
#logic - broken images will not have img tag in the image url.


import requests
import re

from bs4 import BeautifulSoup
#url = "https://www.ultimateqa.com/automation"

url = "http://the-internet.herokuapp.com/broken_images"
#url="https://phptravels.com/demo/"

response = requests.get(url)
soup = BeautifulSoup(response.content, "html.parser")

for link in soup.findAll('img'):
    if 'img' in str(link.get('src')):
        print(link.get('src'))
        print ("---------------")
        print("Image not broken")
    else:
        print(link.get('src'))
        print("------------")
        print("Image is broken")
        
        
        
        
#Sample output

"""
/img/forkme_right_green_007200.png
---------------
Image not broken
asdf.jpg
------------
Image is broken
hjkl.jpg
------------
Image is broken
img/avatar-blank.jpg
---------------
Image not broken










"""
