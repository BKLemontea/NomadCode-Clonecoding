import requests
from bs4 import BeautifulSoup

LIMIT = 50
URL = f"https://www.indeed.com/jobs?q=python&limit={LIMIT}"

def extract_indeed_pages():
    result = requests.get(URL)
    soup = BeautifulSoup(result.text, "html.parser") #html 전부 가져옴
    pagination = soup.find("div", {"class":"pagination"}) #div를 찾아서 class명이 pagination인 요소를 반환

    links = pagination.find_all('a') #링크를 찾아서 리스트를 만듬
    pages = []

    #-1은 마지막에서 부터 시작해서 첫 item을 나타냄
    #spans[:-1]는 span을 모두 가져오되 마지막 것은 제외한다는 뜻이다
    #spans[0:5] 0부터 시작해서 5까지 가져옴
    for link in links[:-1]:
        #pages.append(link.find("span").string) #각 link안에 span을 찾음
        pages.append(int(link.string)) #위와 같은 결과가 나옴
    max_page = pages[-1]
    return max_page

def extract_indeed_jobs(last_page):
    jobs = []
    #for page in range(last_page):
    result = requests.get(f"{URL}&start={0*LIMIT}")
    soup = BeautifulSoup(result.text, "html.parser")
    results = soup.find_all("div",{"class":"jobsearch-SerpJobCard"})
    for result in results:
        title = result.find("div",{"class":"title"}).find('a')["title"]
        company = result.find("span",{"class":"company"})
        company_anchor = company.find('a')
        if company_anchor is not None:
            company = company_anchor.string
        else:
            company = company.string
        company = company.strip() #빈칸을 지워준다.  ex)company.strip("F") F를 찾아서 지운다.
        print(company)
    return jobs