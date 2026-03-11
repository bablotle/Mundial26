import LocalLandingQR from '@/components/LocalLandingQR';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
        const { id } = await params;

        // Esto ya no debería estar subrayado
        return <LocalLandingQR id={id} />;
}
