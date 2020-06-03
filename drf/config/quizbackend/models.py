from django.db import models

class Quiz(models.Model):
    question = models.CharField('문제', max_length=100)
    answer_list = models.TextField('답안 리스트')     
    answer = models.IntegerField('답')
    
    def __str__(self):
        return self.question