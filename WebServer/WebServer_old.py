from flask import Flask

# to read cookies sent to server
from flask import request

# to store cookies and send back as response object
from flask import make_response

# Crawler Dependencies
from html.parser import HTMLParser
from urllib.request import urlopen
from urllib import parse


app = Flask(__name__)


# This is the route that corresponds to <website.com/>
# it will use the function definition below as it's primary script
# whatever it returns, will be displayed on the page, but this is
# only used for testing purposes.  We'll be sending back JSON
# TODO: Send JSON with Flask to client
@app.route("/")
#def hello():
#	return "Hello World!"

#  This function will render values from the cookie.
#  specificaly the value of 'username'.  Otherwise it will say not set
def index():
	username = request.cookies.get('username')
	# use cookies.get(key) instead of cookies[key] to not get a
	# KeyError if the cookie is missing
	if username:
		return username
	else:
		return "No username has been set in cookie"
@app.route('/about')
def about():
	return 'The about page'

# this route will set the value to 'the username' corresponding to the key 'username'
@app.route('/read')
def read():
	resp = make_response()
	resp.set_cookie('username', 'the username')
	return resp

@app.route('/add')
def add():
	# This program adds two numbers

	num1 = 1.5
	num2 = 6.3

	# Add two numbers
	sum = float(num1) + float(num2)

	# Display the sum
	print('The sum of {0} and {1} is {2}'.format(num1, num2, sum))
	return str(sum)

@app.route('/crawler')
# And finally here is our spider. It takes in an URL, a word to find,
# and the number of pages to search through before giving up
def startSpider():
	def spider(url, word, maxPages):
	    pagesToVisit = [url]
	    numberVisited = 0
	    foundWord = False
	    # The main loop. Create a LinkParser and get all the links on the page.
	    # Also search the page for the word or string
	    # In our getLinks function we return the web page
	    # (this is useful for searching for the word)
	    # and we return a set of links from that web page
	    # (this is useful for where to go next)
	    while numberVisited < maxPages and pagesToVisit != [] and not foundWord:
	        numberVisited = numberVisited +1
	        # Start from the beginning of our collection of pages to visit:
	        url = pagesToVisit[0]
	        pagesToVisit = pagesToVisit[1:]
	        try:
	            print(numberVisited, "Visiting:", url)
	            parser = LinkParser()
	            data, links = parser.getLinks(url)
	            if data.find(word)>-1:
	                foundWord = True
	                # Add the pages that we visited to the end of our collection
	                # of pages to visit:
	                pagesToVisit = pagesToVisit + links
	                print(" **Success!**")
	        except:
	            print(" **Failed!**")
	    if foundWord:
	        print("The word", word, "was found at", url)
	    else:
	        print("Word never found")


	# We are going to create a class called LinkParser that inherits some
	# methods from HTMLParser which is why it is passed into the definition
	class LinkParser(HTMLParser):

	    # This is a function that HTMLParser normally has
	    # but we are adding some functionality to it
	    def handle_starttag(self, tag, attrs):
	        # We are looking for the begining of a link. Links normally look
	        # like <a href="www.someurl.com"></a>
	        if tag == 'a':
	            for (key, value) in attrs:
	                if key == 'href':
	                    # We are grabbing the new URL. We are also adding the
	                    # base URL to it. For example:
	                    # www.netinstructions.com is the base and
	                    # somepage.html is the new URL (a relative URL)
	                    #
	                    # We combine a relative URL with the base URL to create
	                    # an absolute URL like:
	                    # www.netinstructions.com/somepage.html
	                    newUrl = parse.urljoin(self.baseUrl, value)
	                    # And add it to our colection of links:
	                    self.links = self.links + [newUrl]

	    # This is a new function that we are creating to get links
	    # that our spider() function will call
	    def getLinks(self, url):
	        self.links = []
	        # Remember the base URL which will be important when creating
	        # absolute URLs
	        self.baseUrl = url
	        # Use the urlopen function from the standard Python 3 library
	        response = urlopen(url)
	        # Make sure that we are looking at HTML and not other things that
	        # are floating around on the internet (such as
	        # JavaScript files, CSS, or .PDFs for example)
	        if response.getheader('Content-Type')=='text/html':
	            htmlBytes = response.read()
	            # Note that feed() handles Strings well, but not bytes
	            # (A change from Python 2.x to Python 3.x)
	            htmlString = htmlBytes.decode("utf-8")
	            self.feed(htmlString)
	            return htmlString, self.links
	        else:
	            return "",[]

	url = "http://www.dreamhost.com"
	word = "secure"
	maxPages = 200
	print("Spider is crawling at url: " + str(url) + " and searching for word: " + str(word) + " with " + str(maxPages) + " max pages")
	spider(url, word, maxPages)

	return "Crawler ran"

if __name__ == "__main__":
	app.run()
