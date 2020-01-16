import requests
from bs4 import BeautifulSoup

LIMIT = 50
URL = "https://stackoverflow.com/jobs?q=python&sort=i"

def get_last_page():
    result = requests.get(URL)
    soup = BeautifulSoup(result.text, "html.parser")
    pages = soup.find("div", {"class":"s-pagination"}).find_all("a")
    last_page = pages[-2].get_text(strip=True) #strip=True을 써서 여백을 없애주자
    return int(last_page) #string이니 integer로 바꿔주자

def extract_job(html):
    title = html.find("h2", {"class" : "fs-body3"}).get_text(strip=True) #strip=True을 써서 여백을 없애주자
    company, location = html.find("h3", {"class":"fs-body1"}).find_all("span", recursive=False) #recursive=False는 첫 단계의 span만 가져온다.
    print(company.get_text(strip=True), location.get_text(strip=True))
    return {'title':title}

def extract_jobs(last_page):
    jobs = []
    #for page in range(last_page): #range는 인자로 integer만 쓸수 있다
    result = requests.get(f"{URL}&pg={0+1}")
    soup = BeautifulSoup(result.text, "html.parser")
    results = soup.find_all("div", {"class":"-job"})
    for result in results:
        job = extract_job(result)
        jobs.append(job)
    return jobs

def get_jobs():
    last_page = get_last_page()
    jobs = extract_jobs(last_page)
    return jobs