## Admin Page Running on your machine

이 가이드는 URL-Shortener의 관리자 페이지 사용을 위한 가이드라인입니다.



### Prerequistes

* Python 3.6
* Virtualenv (옵션)



### Installation

1. **먼저 Git 명령어를 이용해 소스 코드를 Clone 합니다**

   ```
   $ git clone https://github.com/NEONKID/URL-Shortener.git
   ```

2. **pip 명령어를 이용해 패키지를 설치해주세요**

   ```
   $ cd shurl-admin
   $ pip install -r requirements.txt
   ```
   
3. **Admin Page와 URL-Shortener DB를 연동**

   관리자 페이지에서 URL-Shortener App을 통해 저장된 URL에 접근하기 위해 해당 DB의 정보를 입력해야 합니다. ```admin/settings/``` 경로에서 원하는 환경의 파일을 사용하여 아래의 내용을 입력해주세요

   ```
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.postgresql',
           'NAME': 'shurl',
           'USER': 'root',
           'PASSWORD': 'root',
           'HOST': '127.0.0.1',
           'PORT': '5432',
       }
   }
   ```

4. **관리자 계정 생성**

   관리자 페이지에서 관리자 권한을 통해 URL DB를 제어할 사용자를 생성해야 합니다. 아래의 명령어를 이용하여 관리자 계정을 만들어주세요

   ```
   $ python manage.py createsuperuser
   ```
   
   아이디와 이메일 주소는 자유롭게 입력하셔도 되지만, 비밀번호의 경우, 8자 이상을 권장합니다.
   
5. **관리자 페이지 접속**

   모든 작업이 끝났습니다. 아래의 서버 명렁어를 이용해 서버를 실행한 후, 관리자 페이지는 ```http://localhost:8000/site-admin```에서 접속할 수 있습니다.



## Start Admin Server

```
$ python manage.py runserver
```





## Production

관리자 페이지를 운영 환경에서 사용하고자 하는 경우, 관리자에게 별도의 주소를 알려주는 형태로 운영해주세요. 이 페이지는 URL-Shortener와는 독립적으로 운영됩니다.

관리자 페이지에서 바로 URL-Shortener App의 메인 페이지와 연결될 수 있도록 연동하려면, ```admin/settings/urls.py```파일을 열고, ```http://localhost:3000```을 현재 운영 중이신 URL로 수정해주세요.

```python
from django.contrib import admin
from django.urls import path
from django.views.generic import RedirectView

urlpatterns = [
    path(r'', RedirectView.as_view(url='http://localhost:3000'), name='home'),
    path(r'site-admin/', admin.site.urls),
]
```



