from .models import Quiz
from .serializers import QuizSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import random

class QuizView(APIView):
    '''
    랜덤 퀴즈!
    '''
    def get(self, request, format=None):
        randomset = sorted(Quiz.objects.all(), key=lambda x: random.random())
        serializer = QuizSerializer(randomset[0:3], many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
