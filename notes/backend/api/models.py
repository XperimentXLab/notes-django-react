from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Note(models.Model):
  title = models.CharField(max_length=100) #
  content = models.CharField(max_length=500)
  created_at = models.DateTimeField(auto_now_add=True)

  author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notes') 
  # This line defines an author field, which is a foreign key to the User model. 
  # The on_delete=models.CASCADE argument specifies that if the referenced User is deleted, all related notes should also be deleted. 
  # The related_name='notes' argument allows you to access all notes related to a particular user using the notes attribute on the User model.

  def __str__(self):
    return self.title