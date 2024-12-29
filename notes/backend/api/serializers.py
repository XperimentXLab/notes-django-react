from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ["id", "username", "password"]
    extra_kwargs = {"password": {"write_only": True}} # The extra_kwargs attribute is used to set additional options for the fields, in this case, making the password field write-only. This ensures that the password is not included in the serialized output when retrieving user data, enhancing security

  def create(self, validated_data): # The create_user method is a helper function that creates a new user with the specified username and password.
    user = User.objects.create_user(**validated_data) # It automatically hashes the password for security.
    return user
    
class NoteSerializer(serializers.ModelSerializer):
  class Meta:
    model = Note
    fields = ["id", "title", "content", "created_at", "author"]
    extra_kwargs = {"author": {"read_only": True}}