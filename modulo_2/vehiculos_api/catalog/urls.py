from django.urls import path
from rest_framework.routers import DefaultRouter

from catalog.calculos_views import calcular_area_triangulo
from catalog.sales_view import promedio_ventas
from .views import MarcaViewSet, VehiculoViewSet

router = DefaultRouter()
router.register(r"marcas", MarcaViewSet, basename="marcas")
router.register(r"vehiculos", VehiculoViewSet, basename="vehiculos")

urlpatterns = [

    path(
    'triangle/area/',
    calcular_area_triangulo,
    name='triangle-area'
    ),

    path(
    'products/promedio-ventas/',
    promedio_ventas,
    name='promedio-ventas'
    ),


]
urlpatterns += router.urls
