# 오늘의 TOP100
from bs4 import BeautifulSoup
import urllib.request


print('베스트셀러 TOP20 \n')

webpage = urllib.request.urlopen('https://search.shopping.naver.com/book/home')
booklist = []
writerlist = []
Rank = 20
soup = BeautifulSoup(webpage, 'html.parser')                       # 변수에 HTML 코드를 담고
for i in soup.find_all('strong', "bestSeller_title__NjtaG"):        # 그중 원하는 정보의 내용을 담는다(책이름)
    booklist.append(i.get_text())
for i in soup.find_all('div', "bestSeller_writer__b0sDd"):          # 저자 및 출판사
    writerlist.append(i.get_text())

for i in range(Rank):
    print(' - %2d위 : %s - %s' % (i+1, booklist[i], writerlist[i]))  # 출력
