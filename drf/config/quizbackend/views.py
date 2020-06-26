from .models import Category, Quiz, Result
from .serializers import CategorySerializer, QuizSerializer, ResultSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import random
from django.db.models import Q

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
    def get(self, request, category_pk, format=None):
        randomset = sorted(Quiz.objects.filter(category=Category.objects.get(pk=category_pk)), key=lambda x: random.random())
        serializer = QuizSerializer(randomset[0:5], many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ResultView(APIView):
    '''
    퀴즈 결과!
    '''
    def get(self, request, category_pk, score, format=None):
        queryset = Result.objects.filter(
            Q(category=Category.objects.get(pk=category_pk)) & 
            Q(score=score)
        )

        # queryset_by_using_get = Result.objects.get(
        #     category=Category.objects.get(pk=category_pk),
        #     score=score
        # )

        # get을 쓰지 않는 이유는 DoseNotExist, MultipleObjectsReturned Raising 때문..
        # 성능 문제 vs error or return none 문제인데 비교를 어떤식으로 하면 좋을까        
        
        serializer = ResultSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
