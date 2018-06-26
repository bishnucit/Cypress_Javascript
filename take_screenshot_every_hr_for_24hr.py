#Requires Geckodriver in path or script folder
#requires selenium package installed -  pip3 install selenium


import time
from selenium import webdriver

driver = webdriver.Firefox()
driver.implicitly_wait(30)
driver.maximize_window()
driver.get("http://the-internet.herokuapp.com/dynamic_content")


print("Taking screneshots")

for i in range(1,25):
    driver.get_screenshot_as_file('C:/Users/username/Desktop/python/test'+str(i)+'.png')
    print("Screenshot saved as " + str(i)+ ".png")
    print("Waiting for 1 hr")
    driver.refresh()
    time.sleep(3600) #1 hour sleep 60*60

print("closing browser and quiting")
driver.quit()




"""
Sample Output
Taking screneshots
Screenshot saved as 1.png
Waiting for 1 hr
Screenshot saved as 2.png
Waiting for 1 hr
Screenshot saved as 3.png
Waiting for 1 hr
Screenshot saved as 4.png
Waiting for 1 hr
Screenshot saved as 5.png
Waiting for 1 hr
Screenshot saved as 6.png
Waiting for 1 hr
Screenshot saved as 7.png
Waiting for 1 hr
Screenshot saved as 8.png
Waiting for 1 hr
Screenshot saved as 9.png
Waiting for 1 hr

..
Screenshot saved as 24.png
Waiting for 1 hr
closing browser and quiting
"""
