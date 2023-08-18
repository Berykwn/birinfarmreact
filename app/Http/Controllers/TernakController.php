<?php

namespace App\Http\Controllers;

use App\Models\Jenis_ternak;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

use App\Http\Controllers\Controller;
use App\Http\Requests\TernakRequest;
use App\Models\Ring;
use App\Models\Ternak;
use App\Services\TernakService;


class TernakController extends Controller
{

    protected $ternakService;

    public function __construct(TernakService $ternakService)
    {
        $this->ternakService = $ternakService;
    }

    public function ternakPage()
    {
        $ternak = $this->ternakService->getTernakPaginate(8);
        $allTernak = $this->ternakService->getAllTernakWithRelations();

        return Inertia::render('Ternak', [
            'title' => 'Ternak',
            'pages' => 'Ternak',
            'ternak' => $ternak,
            'allTernak' => $allTernak,
        ]);
    }

    public function detailTernak(Request $request)
    {
        $ternak = $this->ternakService->getTernakById($request->id);

        return Inertia::render('DetailTernak', [
            'title' => 'Ternak',
            'pages' => 'Ternak',
            'ternakDetail' => $ternak,
        ]);
    }

    public function index()
    {
        $ternak = $this->ternakService->getTernakPaginate(8);
        $allTernak = $this->ternakService->getAllTernakWithRelations();

        return Inertia::render('Admin/Ternak/Ternak', [
            'pages' => [
                'title' => 'Ternak',
                'name' => 'Ternak',
                'url' => 'dashboard.ternak'
            ],
            'ternak' => $ternak,
            'allTernak' => $allTernak
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Ternak/TambahTernak', [
            'pages' => [
                'title' => 'Tambah Ternak',
                'name' => 'Ternak',
                'url' => 'dashboard.ternak'
            ],
            'jenis' => Jenis_ternak::latest()->get(),
            'ring' => Ring::latest()->get(),
        ]);
    }

    public function store(TernakRequest $request)
    {
        $validatedData = $request->validated();
        $foto = $validatedData['foto'];
        $fotoName = time() . '_' . Str::slug(pathinfo($foto->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $foto->getClientOriginalExtension();

        if (!$foto->storeAs('img/ternaks/', $fotoName)) {
            return redirect()->back()->with('error', 'Terjadi kesalahan saat mengupload foto.');
        }

        Ternak::create(array_merge($validatedData, ['foto' => $fotoName]));

        return redirect()->route('dashboard.ternak')->with('message', 'Data ternak berhasil ditambahkan.');
    }

    // public function show(Ternak $ternak, Request $request)
    // {
    //     $ternaks = $ternak->with(['jenis_ternak', 'rings'])->find($request->id);

    //     return Inertia::render('Admin/Ternak/DetailTernak', [
    //         'ternak' => $ternaks,
    //         'pages' => 'Ternak',
    //         'title' => 'Detail Ternak',
    //     ]);
    // }

    public function edit(Request $request)
    {
        $ternak = $this->ternakService->getTernakById($request->id);

        return Inertia::render('Admin/Ternak/EditTernak', [
            'pages' => [
                'title' => 'Edit Ternak',
                'name' => 'Ternak',
                'url' => 'dashboard.ternak'
            ],
            'ternak' => $ternak,
            'jenis' => Jenis_ternak::latest()->get(),
            'ring' => Ring::latest()->get(),
        ]);
    }

    public function update(TernakRequest $request, Ternak $ternak, $id)
    {
        $existingTernak = Ternak::findOrFail($id);

        $validatedData = $request->validated();
        $fotoName = $existingTernak->foto; // Preserve the existing foto name if no new foto is uploaded

        if ($request->hasFile('foto')) {
            $foto = $validatedData['foto'];
            $fotoName = time() . '_' . Str::slug(pathinfo($foto->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $foto->getClientOriginalExtension();

            if (!$foto->storeAs('img/ternaks/', $fotoName)) {
                return redirect()->back()->with('error', 'Terjadi kesalahan saat mengupload foto.');
            }
        }

        $existingTernak->update(array_merge($validatedData, ['foto' => $fotoName]));

        return redirect()->route('dashboard.ternak')->with('message', 'Data berita berhasil diupdate.');
    }

    public function destroy(Ternak $ternak, Request $request)
    {
        $ternak = Ternak::find($request->id);
        //cek apakah di storage ada foto
        if (Storage::exists('img/ternaks' . $ternak->foto)) {
            Storage::delete('img/ternaks' . $ternak->foto);
        }

        $ternak->delete();

        return redirect()->route('dashboard.ternak')->with('message', 'Data ternak berhasil dihapus!');
    }
}