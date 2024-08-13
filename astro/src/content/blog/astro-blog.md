---
title: "블로그 마이그레이션"
description: "Tistory -> Astro 블로그 마이그레이션"
pubDate: 2024-08-11
heroImage:
  src: "/blog-placeholder-1.jpg"
  alt: ""
order: 1
tags: ["blog", "블로그"]
---

## 블로그 이주 계기

지금까지 [티스토리 블로그](https://babyshark.tistory.com/)를 써왔는데 여러모로 불편한 점이 생기면서 기능은 적어도 간단하게 작성할 수 있는 나만의 블로그를 만들고 싶어졌다.

블로그 프레임워크를 찾아보다가 `Astro`를 알게 되었는데 글을 md 파일로 관리할 수 있어 간편하고 나중에 또 블로그를 개편하고 싶을 때 이식성도 좋을 것 같다. + 별다른 설정 없이 npm으로 바로 설치할 수 있고, Vite 기반이라 빌드 속도도 빠르다고 하여 사용해보려고 한다.

다양한 [테마](https://astro.build/themes/)도 적용할 수 있다. 내가 적용한 테마는 [Cody](https://astro.build/themes/details/cody/) 이다.

## 알게된 것들

### 프로젝트 기술스택 아이콘 사용법

[여기](https://github.com/vscode-icons/vscode-icons/wiki/ListOfFiles)서 원하는 아이콘의 name을 찾아 프로젝트 md 파일의 stack 부분에 추가하면 아이콘이 표시된다.

```
stack: ["nestjs", "reactjs", "Typescript", "mysql"]
```
