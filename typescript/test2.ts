// 타입스크립트의 클래스를 이용하여 Dict (딕셔너리. dictionary) 클래스를 만드세요. Dict 클래스는 아래와 같은 메소드들을 갖고 있어야 합니다.
//add: 단어를 추가함
//get: 단어의 정의를 반환함
//delete: 단어를 삭제함
//update: 단어를 업데이트 함
//showAll: 딕셔너리의 단어를 모두 프린트함
//count: 딕셔너리 단어들의 총 수를 반환함

type Words = {
    [key:string]:string
}

class Dict {
    private words: Words
    constructor(){
        this.words = {}
    }

    add(word:Word){
        if(this.words[word.str1] === undefined) {
            this.words[word.str1] = word.str2;
        }
    }

    get(str1:string){
        return this.words[str1]
    }

    del(str1:string){
        if(str1 in this.words){
            delete this.words[str1]
        }
    }

    update(word:Word){
        if (this.words[word.str1] !== undefined) {
            this.words[word.str1] = word.str2;
        }
    }

    showAll(){
        for(let index in this.words){
            console.log(`${index}: ${this.words[index]}`)
        }

    }

    count(){
        console.log(Object.keys(this.words).length)
    }
}

class Word {
    constructor(
        public str1 : string,
        public str2 : string
    ){}
}

const bab1 = new Word("국밥", "한식")
const bab2 = new Word("청국밥", "한식")
const bab3 = new Word("초밥", "일식")
const bab4 = new Word("짜장밥", "중식")
const bab5 = new Word("짜장밥", "한식")
const dict = new Dict()

dict.add(bab1);
console.log(dict.get("국밥"))
dict.add(bab2)
dict.add(bab3)
dict.add(bab4)
dict.showAll()
dict.update(bab5)
dict.del("초밥")
dict.showAll()
dict.count()