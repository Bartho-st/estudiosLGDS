
e1 = 10 
e2 = 3

d1 = 2.345
d2 = 3.14

c1 = "ETI CONRAZON"
c2 = "cICLO 2"

b1 = True 
b2 = False

print("forma 1")
#print('entero', e1,e2) 
#print('decimal', d1,d2) 
#print('cadena', c1,c2 )
#print('booleano',b1,b2)


#"""" Entrada """

#entero = int(input('ingrese el entero  '))
#decimal = float(input('ingrese el decimal' ))
#cadena = str(input('ingrese el texto '))
#booleano = bool(input('ingrese F o V'))

#""""salida"""

#print('\nforma 4'
 #     '\nEntero: {}'
  #    '\ndecimal:  {}'
   #   '\ncadena:  {}'
    #  '\nbooleano:  {}'
     # .format(entero,decimal,cadena,booleano))

#sea el precio del articulo 
#agregar el igv = 18%
# 25% de ganancia }
# pv = preciocompra + ganancia; preciofinal = pv + igv
#= precio de compra (25/100)*300 + 375 ; precio de venta = 375 + 0.18*375 =67.5+375= 442.5

artic = str(input('ingrese el poducto '))
Pprecio = float(input('ingrese el precio'))
ganancia= float(input('ingrese la ganancia (%)'))

PrVen = Pprecio + (ganancia/100)*Pprecio
Pganancia = (ganancia/100)*Pprecio

Pvfinal = PrVen + 0.18*PrVen

print('La ganancia es igual = ', Pganancia)
print('El precio final es es =', Pvfinal)


