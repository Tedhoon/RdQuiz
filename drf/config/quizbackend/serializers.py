from rest_framework import serializers
from .models import Category, Quiz

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'category', )

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ('id', 'question', 'answer_list', 'answer', )
