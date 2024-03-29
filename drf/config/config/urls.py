from django.contrib import admin
from django.urls import path
from quizbackend.views import CategoryView, QuizView, ResultView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/category/', CategoryView.as_view(), name="category"),
    path('api/quiz/<int:category_pk>/', QuizView.as_view(), name="quiz"),
    path('api/result/<int:category_pk>/<int:score>/', ResultView.as_view(), name="result"),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
