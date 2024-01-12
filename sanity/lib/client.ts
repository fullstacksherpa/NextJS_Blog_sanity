import { createClient } from 'next-sanity'

//there are helper to query sanity queries

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
