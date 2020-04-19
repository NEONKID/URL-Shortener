## Admin Page Running on your machine

This guide is a guideline for using URL-Shortener's admin page.



### Prerequistes

* Python 3.6
* Virtualenv (Optional)



### Installation

1. **Clone the Project**

   ```
   $ git clone https://github.com/NEONKID/URL-Shortener.git
   ```

2. **Install packages from pip **

   ```
   $ cd shurl-admin
   $ pip install -r requirements.txt
   ```
   
3. **Synchronize Admin Page and URL-Shortener DB**

   In order to access the URL saved through the URL-Shortener App in the admin page, you need to enter the information of the DB. In the path of `` admin/settings/ ``, enter the contents below using the file of the desired environment.

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

4. **Create administrator account **

   On the admin page, you need to create a user to control the URL DB through admin privileges. Create an administrator account using the command below.

   ```
   $ python manage.py createsuperuser
   ```
   
   You can enter your ID and email address freely, but for passwords, 8 characters or more is recommended.
   
5. **Connect Admin Page**

   Everything is done. After running the server using the server command below, the admin page can be accessed from  ```http://localhost:8000/site-admin```



## Start Admin Server

```
$ python manage.py runserver
```





## Production

If you want to use the administrator page in the operating environment, please operate in the form of giving the administrator a separate address. This page operates independently of URL-Shortener.

To link to the main page of URL-Shortener App directly from the admin page, open the file ```admin/settings/urls.py```, and use ```http://localhost:3000``` Please correct it with the URL in operation.

```python
from django.contrib import admin
from django.urls import path
from django.views.generic import RedirectView

urlpatterns = [
    path(r'', RedirectView.as_view(url='http://localhost:3000'), name='home'),
    path(r'site-admin/', admin.site.urls),
]
```



