# NASA Search Photo SPA


### 소개
![img](./public/index.jpg)

본 웹 어플리케이션은 리엑트 프레임워크를 사용하여 개발하였습니다. 사용자가 검색창에 입력한 값을 images.nasa.gov API(v1.5.3 019­04­18)에서 조회하여 카드 형태로 보여줍니다. 


### 💻 Tech

#### 비동기 처리
axios 모듈 

####  API 호출



### ✅ TODO 

#### 페이지네이션

``` javascript
class NasaData extends React.Component {
    constructor(props) {
        this.state = {
            setLoading: false,
            currentPage: 1,
            setCurrentPage: 1,
            postsPerPage: 2,
            ...

render() {
    this.indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    this.indexOfFirstPost = this.indexOfLastPost - this.state.postsPerPage;
    this.currentPosts = this.state.nasaData.collection.items.slice(this.state.indexOfFirstPost, this.state.indexOfLastPost);
    ...
```

#### 느린 로딩
- 검색시 오래 걸립니다. 


### 🌹 디자인
- 앨범 스타일 디자인 참고
	- [Bootstrap 4 Album example by Benjamin Berglund](https://codepen.io/WeeHorse/pen/PQydzW)
- 로딩창 디자인
	- [W3School](https://www.w3schools.com/howto/howto_css_loader.asp)


### 🚀 실행

`create-react-app`을 사용하여 만들어져 있으며 `npm install` 후 `npm start` 하여 실행합니다.

``` bash
npm start
```
