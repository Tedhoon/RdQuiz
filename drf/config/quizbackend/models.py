from django.db import models

class Category(models.Model):

    class Meta:
        verbose_name = '퀴즈 카테고리'
        verbose_name_plural = '퀴즈 카테고리들'

    category = models.CharField('카테고리', max_length=100)
    is_open = models.BooleanField('공개', default=False)
    
    def __str__(self):
        return self.category


class Quiz(models.Model):
    
    class Meta:
        verbose_name = '퀴즈'
        verbose_name_plural = '퀴즈들'

    category = models.ForeignKey('Category', on_delete=models.CASCADE, null=True, verbose_name='카테고리')
    question = models.CharField('문제', max_length=100)
    answer_list = models.TextField('답안 리스트')     
    answer = models.IntegerField('답')
    
    def __str__(self):
        return self.question