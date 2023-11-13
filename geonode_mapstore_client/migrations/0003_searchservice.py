# Generated by Django 3.2.22 on 2023-11-13 17:41

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('geonode_mapstore_client', '0002_migrate_map_blob'),
    ]

    operations = [
        migrations.CreateModel(
            name='SearchService',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('display_name', models.CharField(help_text="Ex. 'UNESCO - {properties.site}'", max_length=250, verbose_name='Display name')),
                ('priority', models.IntegerField(default=3, verbose_name='Priority')),
                ('url', models.CharField(default='', max_length=250, verbose_name='URL of the WFS service')),
                ('typename', models.CharField(help_text='Geonode alternate', max_length=250, verbose_name='Typename')),
                ('attributes', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=250), help_text='Comma separated list of attributes. Search is performed on these fields. Only textual fields can be configured', max_length=250, size=None, verbose_name='Attributes')),
                ('sortby', models.CharField(help_text='Sorting attribute, must be a dataset attribute', max_length=250, verbose_name='Sort By')),
                ('srsName', models.CharField(default='EPSG:4326', help_text='EPSG:xxxx code for the CRS of returned geometries', max_length=250, verbose_name='SRS name')),
                ('maxFeatures', models.IntegerField(default=20, help_text='Max number of feature returned by the search', verbose_name='Max Features')),
            ],
            options={
                'verbose_name': 'Search Service',
            },
        ),
    ]
