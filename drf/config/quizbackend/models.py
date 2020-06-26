from django.db import models

class Category(models.Model):

    class Meta:
        verbose_name = '퀴즈 카테고리'
        verbose_name_plural = '퀴즈 카테고리들'

    category = models.CharField('카테고리', max_length=100)
    is_open = models.BooleanField('공개여부', default=False)
    
    def __str__(self):
        return self.category


class Quiz(models.Model):
    
    class Meta:
        verbose_name = '퀴즈'
        verbose_name_plural = '퀴즈들'

    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, verbose_name='카테고리')
    question = models.CharField('문제', max_length=100)
    answer_list = models.TextField('답안 리스트')     
    answer = models.IntegerField('답')
    
    def __str__(self):
        return self.question


def get_catagory_image_filename(instance, filename):
    category_name = instance.category
    return f"result_images/{category_name}/{filename}"


class Result(models.Model):

    class Meta:
        verbose_name = '결과'
        verbose_name_plural = '결과들'

    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, verbose_name='카테고리')
    score = models.PositiveIntegerField('점수', default=0)
    title = models.CharField('제목', max_length=100)
    content = models.TextField('내용')
    thumbnail = models.ImageField('썸네일 이미지', upload_to=get_catagory_image_filename, blank=True)

    def __str__(self):
        return f"{self.category} - {self.score}점 결과"
