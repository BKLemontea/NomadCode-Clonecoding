#CSV : Comma Separated Value
import csv

def save_to_file(jobs):
    file = open("jobs.csv", mode='w', buffering=-1, encoding="UTF-8", newline='')
    writer = csv.writer(file)
    writer.writerow(["title", "company", "loaction", "link"])
    for job in jobs:
        #values()는 List에서 값만 불러올 수 있다.
        writer.writerow(list(job.values()))
    return