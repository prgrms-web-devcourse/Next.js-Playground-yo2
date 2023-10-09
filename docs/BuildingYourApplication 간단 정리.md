# Routing

- Prefetching
  
기본적으로 \<Link\>가 viewport에 보일 때

useRouter의 `router.prefetch()`로 명시적 지정도 가능

방식에는 해당되는 전체 경로를 하는 것과 첫 번째 로딩이 나올 때까지의 레이아웃만 하는 Dynamic Routes가 있다.

- Cache

클라이언트 측 메모리에 캐시

- Partial Rendering
  
route 될 때 공유되는 레이아웃은 유지

- Soft Navigation

리액트나 브라우저의 state를 routing 간에도 유지가능

- Route Group

app 폴더 안에서 괄호로 감싼 폴더로 만들면 URL path 에 영향을 주지 않고 그룹지을 수 있다.

레이아웃을 다르게 적용한다든지로 활용 가능

- Static Params

자동 메모이즈

- Loading

자체 최적화 기능 때문에 사용하는 걸 권장

- Streaming

SSR 과정

1. 서버에서 페이지에 대한 모든 데이터 수신
2. 서버에서 렌더링
3. HTML CSS JS 가 클라로 보내짐
4. HTML CSS 로 상호작용 안되는 페이지 보여줌
5. Hydrate 해서 상호작용되도록

모든 과정은 블로킹

페이지 전체를 대상으로 작업하면 보이는데 오래 걸려서 컴포넌트 별로 나눠서 과정 적용 

- Error Boundary

같은 segment에 있어도 layout 의 에러는 안잡음 => 에러 바운더리가 레이아웃 안에 있어서

최상위 에러 바운더리는 `global-error.js`

- Parallel Routes

현재 URL로 슬롯의 상태 복구 못하면 default 파일의 컴포넌트 렌더링

슬롯 자체는 모달 같은 걸로도 활용 가능, 
사용 불가능 할때 모달 내용 렌더링 막는거 보정하려면 default를 null 리턴하도록

조건에 따른 분기 페이지로 활용도 가능

- Route Handler

app 폴더안에 한 폴더에 하나씩만 있을 수 있다

페이지로 나타나는 요소는 아님


# Data Fetching

- Fetch

fetch API를 extends

caching, revalidating, memoizing

fetch의 반환 데이터를 캐시

revalidate는 시간 / path나 tag 기준

데이터 패칭은 서버에서 하는걸 권장

`server-only` 패키지를 사용하는걸 추천한다고 함

# Rendering


