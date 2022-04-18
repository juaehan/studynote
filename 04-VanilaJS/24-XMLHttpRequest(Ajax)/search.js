/** KAKAO REST KEY */
const KAKAO_REST_KEY = "519f0b46a2419ef18f6e15f93708f80d";

/** 검색 위치 */
let source = null;

/** 페이지 번호 */
let currentPage = 1;

/** 검색어 */
let queryKeyword = null

/** 마지막 페이지인지 검사 */
let isEnd = false;


/** 검색폼의 submit 이벤트 - 신규검색 */
document.querySelector('#searchForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // 검색 대상을 가져온다.
    const sourceField = document.querySelector('#source');
    source = sourceField[sourceField.selectedIndex].value;
    console.log(source);        // cafe, blog 출력


    // 입력된 검색어를 가져온다.
    const queryField = document.querySelector('#query');
    queryKeyword = queryField.value.trim();

    // 검색어가 입력되지 않은 경우에 대한 예외처리
    if (!queryKeyword) {
        alert('검색어를 입력하세요.');
        queryField.focus();
        return;
    }

    // 신규검색
    currentPage = 1;
    search();
});


/** 스크롤 이벤트 - 추가검색 */
window.addEventListener('scroll', (e) => {
    // 마지막 페이지거나 이미 로딩바가 화면에 표시되고 있다면 처리 중단
    if(isEnd || document.querySelector('#loading').classList.contains('active')){
        return;
    }

    // 스크롤바의 y좌표
    const scrollTop = window.scrollY;
    // 웹 브라우저의 창 높이
    const windowHeight = window.screen.availHeight;
    // HTML 문서의 높이
    const documentHeight = document.body.scrollHeight;

    // 스크롤바의 반동 효과를 고려해서 scrollTop + windowHeight가 실제 화면 크기보다 커 질 수도 있다.
    if (scrollTop + windowHeight >= documentHeight) {
        // 2페이지 이후는 추가 검색
        currentPage++;
        search();
    }
});




/** Ajax 요청 후 결과화면 출력 */
async function search(){
    // 로딩바
    const loading = document.querySelector('#loading');
    loading.classList.add('active');

    // 검색 결과가 표시될 영역
    const list = document.querySelector('#list');

    // 1페이지에 대한 요청일 경우 기존에 표시되고 있던 검색결과가 있다면 삭제한다.
    if (currentPage == 1){
        Array.from(list.getElementsByTagName('li')).forEach((v, i) => {
            list.removeChild(v);
        });
    }

    // 검색결과를 저장할 빈 변수
    let json = null;

    try{
        json = await axios.get(`https://dapi.kakao.com/v2/search/${source}`, {
            params: {
                query: queryKeyword,
                page: currentPage,
            },
            headers: {
                Authorization: `KakaoAK ${KAKAO_REST_KEY}`,
            },
        });
        
        // 응답결과 확인
        console.log(json);
    } catch (e) {
        console.error(err);
        alert('요청을 처리하는데 실패했습니다.');
        return;
    } finally {
        // 로딩바 닫기
        loading.classList.remove('active');
    }

    if (json != null) {
        const {data} = json;

        // 다음 페이지를 요청할 수 있는지를 판단하기 위한 값
        isEnd = data.meta.is_end;

        data.documents.map((v, i) => {
            const li = document.createElement('li');
            list.appendChild(li);

            const a = document.createElement('a');
            a.setAttribute('href', v.url);
            a.setAttribute('target', '_blank');
            li.appendChild(a);

            const img = document.createElement('img');
            img.classList.add('thumbnail');
            img.setAttribute('src', v.thumbnail || "img/noimage.jpg");
            a.appendChild(img);

            const h2 = document.createElement('h2');
            h2.innerHTML = v.title;
            a.appendChild(h2);

            const p = document.createElement('p');
            p.innerHTML = v.contents;
            a.appendChild(p);

            const span1 = document.createElement('span');
            span1.innerHTML = v.blogname || v.cafename;
            span1.classList.add('info');
            a.appendChild(span1);

            const date = new Date(v.datetime);
            const span2 = document.createElement('span');
            span2.innerHTML = date.toLocaleString();
            span2.classList.add('info');
            a.appendChild(span2);

        });
    }
}