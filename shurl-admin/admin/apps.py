from suit.apps import DjangoSuitConfig
from suit.menu import ParentItem, ChildItem


class SuitConfig(DjangoSuitConfig):
    layout = 'vertical'
    menu = (
        ParentItem('Contents', children=[
            ChildItem('Urls', model='app.url')
        ], icon='fa fa-link'),
        ParentItem('Users', children=[
            ChildItem(model='auth.user'),
            ChildItem('User Groups', model='auth.group')
        ], icon='fa fa-users'),
        ParentItem('Settings', children=[
            ChildItem('Password change', url='admin:password_change'),
        ], align_right=True, icon='fa fa-cog'),
    )

    def ready(self):
        super(SuitConfig, self).ready()

        # DO NOT COPY FOLLOWING LINE
        # It is only to prevent updating last_login in DB for demo app
        self.prevent_user_last_login()

    def prevent_user_last_login(self):
        """
        Disconnect last login signal
        """
        from django.contrib.auth import user_logged_in
        from django.contrib.auth.models import update_last_login
        user_logged_in.disconnect(update_last_login)
