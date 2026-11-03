# Korea Toilet Map

iOS 앱 **한국 화장실 지도 (Korea Toilet Map)** 의 공개 사이트입니다.
App Store Connect가 요구하는 두 개의 URL을 이 저장소 하나로 제공합니다.

| 용도 | 주소 |
|---|---|
| 지원 URL (Support URL) | <https://fortranmentis.github.io/Korea-Toilet-Map/support.html> |
| 개인정보 처리방침 URL | <https://fortranmentis.github.io/Korea-Toilet-Map/privacy.html> |

## 구성

| 파일 | 내용 |
|---|---|
| `index.html`, `en/` `ja/` `zh-hans/` `zh-hant/` `ar/` | 검색 노출용 랜딩 페이지 (helppoopy 저장소의 `tools/build_site.py`로 생성, 직접 수정하지 말 것) |
| `sitemap.xml`, `robots.txt` | 위 스크립트가 함께 생성 |
| `landing.css`, `assets/` | 랜딩 페이지 스타일과 이미지 |
| `support.html` | 지원 페이지 — 기능 소개, FAQ, 문의처 |
| `privacy.html` | 개인정보 처리방침 |
| `style.css` | 지원·개인정보 페이지가 공유하는 스타일 |
| `site.js` | 한국어 / English 전환 |

지원·개인정보 페이지는 한국어·영어를 지원하며, 기기 언어가 한국어가 아니면 영어로 시작합니다.

앱 동작이 바뀌면 해당 절과 `privacy.html` 하단의 시행일을 함께 갱신해 주세요.
현재 시행일: 2026년 9월 10일

## 2026-11-03 갱신

6개 언어의 운전자 검색·15/50km 범위·iOS/Android 거리 계산 차이·Android 15개 언어 UI·iOS 평가 메뉴 안내를 원본 `helppoopy/tools/build_site.py`에서 갱신해 재생성했습니다. 소스 기능과 스토어 출시 상태는 구분합니다.
