import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';
import { notFound } from 'next/navigation';

import { fetchNoteById } from '@/lib/api';
import NotePreview from '@/app/notes/[id]/NotePreview';
import Modal from '@/components/Modal/Modal';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NoteModalPage({ params }: Props) {
  const { id } = await params;

  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery({
      queryKey: ['note', id],
      queryFn: () => fetchNoteById(id),
    });
  } catch {
    notFound();
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Modal>
        <NotePreview />
      </Modal>
    </HydrationBoundary>
  );
}
