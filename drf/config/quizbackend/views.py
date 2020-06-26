from .models import Category, Quiz
from .serializers import CategorySerializer, QuizSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import random

class CategoryView(APIView):
    '''
    랜덤 퀴즈 카테고리!
    '''
    def get(self, request, format=None):
        queryset = Category.objects.filter(is_open=True)
        serializer = CategorySerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class QuizView(APIView):
    '''
    랜덤 퀴즈!
    '''
    def get(self, request, pk, format=None):
        print(pk)
        randomset = sorted(Quiz.objects.filter(category=Category.objects.get(pk=pk)), key=lambda x: random.random())
        serializer = QuizSerializer(randomset[0:5], many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


# class Result(APIView):
#     '''
#     퀴즈 결과!
#     '''
#     def get(self, request, pk, format=None):
