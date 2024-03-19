from django.shortcuts import redirect, render
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
from allauth.account.views import PasswordSetView, PasswordChangeView
# from django_otp.plugins.otp_totp.models import TOTPDevice

# Dashboard
class DashboardView(LoginRequiredMixin, View):
    def get(self, request):
        return render(request, "dashboard.html")
    
# class Settings(LoginRequiredMixin, View):
#     template_name = "settings.html"

#     def __init__(self, *args):
#         super(Settings, self).__init__(*args)

#     def get(self, request):
#         k = TOTPDevice.objects.filter(user=request.user)
#         context_data = {"k": k}
#         return render(request, self.template_name, context_data)



class MyPasswordChangeView(LoginRequiredMixin, PasswordChangeView):
    success_url = reverse_lazy("dashboard")


class MyPasswordSetView(LoginRequiredMixin, PasswordSetView):
    success_url = reverse_lazy("dashboard")
