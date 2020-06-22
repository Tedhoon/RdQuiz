from django.contrib import admin
from django.urls import path
from quizbackend.views import CategoryView, QuizView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/category/', CategoryView.as_view(), name="category"),
    path('api/quiz/<int:pk>/', QuizView.as_view(), name="quiz"),
]
