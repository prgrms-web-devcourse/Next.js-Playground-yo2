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

- Server Component

서버에서 

React server Compenent Payload 라는 포멧으로 React가 렌더링

Next.js가 RSC Payload 랑 클라이언트 컴포넌트 JS 명령어로 서버에서 HTML을 렌더링

다음은 클라에서 

만들어진 HTML은 상호작용없는 부분 빠르게 렌더링하는 용도로 사용

RSC Payload 는 클라와 서버 사이 컴포넌트 트리를 조화시키고 Dom을 업뎃하는데 사용

JS 명령어는 hydrate 용

전략 종류
  
1. Static

route 가 build 타임이나 데이터 검즘 중 백그라운드에서 렌더링

결과는 캐쉬되고 CDN에 넣을 수 있다.

개인화가 필요 없는 데이터의 경우 적합

2. Dynamic

유저 요청 시마다 렌더링

개인화된 데이터나 요청 시에 알 수 있는 데이터

스태틱과 다이나믹은 Next.js가 알아서 선택, 개발자는 데이터 캐시나 검증 시점이나 스트림 부분 선택만

- Client Component

`"use client"` 쓰기

파일을 이거로 지정하면 하위 children도 클라이언트로 지정됨

첫 로딩에 포함되는 요청인지에 따라 렌더링 다름

full page load에 포함되면 서버에서 서버/클라 컴포넌트 둘다 준비

처음에 서버 클라로 HTML 보여줌

그다음 hydration

클라 컴포 안에 있어소 server action 으로 서버에서 코드 실행하도록 할 수 있다

서버 컴포에선 오히려 상태관리 도구 비권장

서버에서 작동할 로직을 클라에서도 억지로 사용할 수도 있다.

`server-only`를 쓰면 명시적으로 지정해서 에러로 막을 수 있다.

써드 파티 라이브러리는 클라에서만 쓸수 있는 기능을 갖고있어 그냥 쓰면 서버 컴포넌트에서 에러

따로 감싸는 컴포넌트를 만들어서 use client 지정하고 서버 컴포에서 사용하면 됨

Context Provider 같은거도 감싸서 사용

클라 컴포는 최대한 트리 아래로 위치

클라 컴포 안에서 서버 자원을 쓸 수 있지만 왓다갓다 하는거 보다 새로 서버 요청을 만드는 게 나을 수도

클라 컴포에서 서버 컴포를 import 할 순 없다. 대신 prop으로 넘기는 건 가능

