export default {
  name: 'place',
  title: 'Place',
  type: 'document',
  fields: [
    {
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'country',
          title: 'Country',
          type: 'string',
          validation: Rule => Rule.required(),
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
          validation: Rule => Rule.required(),
        },
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'location.city',
        slugify: input => input.toLowerCase().replace(/\s+/g, '-'),
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'raiting',
      title: 'Raiting',
      type: 'number',
      validation: Rule => Rule.required().positive().max(10),
    },
    {
      name: 'imagePath',
      title: 'ImagePath',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'duration',
      title: 'Duration (days)',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    },
    {
      name: 'distance',
      title: 'Distance (km.)',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: Rule => Rule.required().positive(),
    },
  ],

  preview: {
    select: {
      title: 'location.city',
      media: 'imagePath',
    },
  },
};
