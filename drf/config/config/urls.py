from django.contrib import admin
from django.urls import path
from quizbackend.views import QuizView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/quiz/', QuizView.as_view(), name="quiz")
]
